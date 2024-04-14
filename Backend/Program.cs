using System.Reflection;
using System.Text.Json.Serialization;
using Backend.Data;
using Backend.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using static Backend.Repositories.Repositories;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
var config = new ConfigurationBuilder()
.AddJsonFile("appsettings.json", false, true)
.AddUserSecrets(Assembly.GetExecutingAssembly(), true)
.Build();

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
    policy =>
    {
        policy.WithOrigins("*")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<AppDBContext>(options =>
    options.UseSqlServer(config.GetConnectionString("AppDBContext") ?? throw new InvalidOperationException("Connection string 'AppDBContext' not found.")));
    
builder.Services.AddControllers().AddJsonOptions(x =>
x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve);

builder.Services.AddScoped<DayRepo>();
builder.Services.AddScoped<EmotionRepo>();
builder.Services.AddScoped<MonthRepo>();
builder.Services.AddScoped<RelationshipRepo>();

builder.Services.AddScoped<DayService>();
builder.Services.AddScoped<EmotionService>();
builder.Services.AddScoped<MonthService>();
builder.Services.AddScoped<RelationshipService>();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
