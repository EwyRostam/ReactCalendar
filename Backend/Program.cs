using System.Reflection;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

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
        policy.WithOrigins("*");
    });
});

builder.Services.AddDbContext<AppDBContext>(options =>
    options.UseSqlServer(config.GetConnectionString("AppDBContext") ?? throw new InvalidOperationException("Connection string 'AppDBContext' not found.")));
builder.Services.AddControllers();
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
