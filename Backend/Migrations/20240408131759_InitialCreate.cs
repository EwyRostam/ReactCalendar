﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Emotions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    OppositeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emotions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Emotions_Emotions_OppositeId",
                        column: x => x.OppositeId,
                        principalTable: "Emotions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Relationships",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationships", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Days",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false),
                    RelationshipId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Days", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Days_Relationships_RelationshipId",
                        column: x => x.RelationshipId,
                        principalTable: "Relationships",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmotionRelationship",
                columns: table => new
                {
                    RelationshipsId = table.Column<int>(type: "int", nullable: false),
                    WantedEmotionsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmotionRelationship", x => new { x.RelationshipsId, x.WantedEmotionsId });
                    table.ForeignKey(
                        name: "FK_EmotionRelationship_Emotions_WantedEmotionsId",
                        column: x => x.WantedEmotionsId,
                        principalTable: "Emotions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmotionRelationship_Relationships_RelationshipsId",
                        column: x => x.RelationshipsId,
                        principalTable: "Relationships",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DayEmotion",
                columns: table => new
                {
                    DaysId = table.Column<int>(type: "int", nullable: false),
                    EmotionsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayEmotion", x => new { x.DaysId, x.EmotionsId });
                    table.ForeignKey(
                        name: "FK_DayEmotion_Days_DaysId",
                        column: x => x.DaysId,
                        principalTable: "Days",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DayEmotion_Emotions_EmotionsId",
                        column: x => x.EmotionsId,
                        principalTable: "Emotions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DayEmotion_EmotionsId",
                table: "DayEmotion",
                column: "EmotionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Days_RelationshipId",
                table: "Days",
                column: "RelationshipId");

            migrationBuilder.CreateIndex(
                name: "IX_EmotionRelationship_WantedEmotionsId",
                table: "EmotionRelationship",
                column: "WantedEmotionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Emotions_OppositeId",
                table: "Emotions",
                column: "OppositeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DayEmotion");

            migrationBuilder.DropTable(
                name: "EmotionRelationship");

            migrationBuilder.DropTable(
                name: "Days");

            migrationBuilder.DropTable(
                name: "Emotions");

            migrationBuilder.DropTable(
                name: "Relationships");
        }
    }
}
