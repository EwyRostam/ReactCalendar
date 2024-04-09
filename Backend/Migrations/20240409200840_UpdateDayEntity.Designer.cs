﻿// <auto-generated />
using System;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(AppDBContext))]
    [Migration("20240409200840_UpdateDayEntity")]
    partial class UpdateDayEntity
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Backend.Models.Enteties.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int?>("RelationshipId")
                        .HasColumnType("int");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RelationshipId");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("Backend.Models.Enteties.Emotion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Opposite")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Emotions");
                });

            modelBuilder.Entity("Backend.Models.Enteties.Relationship", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Relationships");
                });

            modelBuilder.Entity("DayEmotion", b =>
                {
                    b.Property<int>("DaysId")
                        .HasColumnType("int");

                    b.Property<int>("EmotionsId")
                        .HasColumnType("int");

                    b.HasKey("DaysId", "EmotionsId");

                    b.HasIndex("EmotionsId");

                    b.ToTable("DayEmotion");
                });

            modelBuilder.Entity("EmotionRelationship", b =>
                {
                    b.Property<int>("RelationshipsId")
                        .HasColumnType("int");

                    b.Property<int>("WantedEmotionsId")
                        .HasColumnType("int");

                    b.HasKey("RelationshipsId", "WantedEmotionsId");

                    b.HasIndex("WantedEmotionsId");

                    b.ToTable("EmotionRelationship");
                });

            modelBuilder.Entity("Backend.Models.Enteties.Day", b =>
                {
                    b.HasOne("Backend.Models.Enteties.Relationship", "Relationship")
                        .WithMany("Days")
                        .HasForeignKey("RelationshipId");

                    b.Navigation("Relationship");
                });

            modelBuilder.Entity("DayEmotion", b =>
                {
                    b.HasOne("Backend.Models.Enteties.Day", null)
                        .WithMany()
                        .HasForeignKey("DaysId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Models.Enteties.Emotion", null)
                        .WithMany()
                        .HasForeignKey("EmotionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EmotionRelationship", b =>
                {
                    b.HasOne("Backend.Models.Enteties.Relationship", null)
                        .WithMany()
                        .HasForeignKey("RelationshipsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Models.Enteties.Emotion", null)
                        .WithMany()
                        .HasForeignKey("WantedEmotionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Backend.Models.Enteties.Relationship", b =>
                {
                    b.Navigation("Days");
                });
#pragma warning restore 612, 618
        }
    }
}
