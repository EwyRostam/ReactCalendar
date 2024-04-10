using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Relationships",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RelationshipId",
                table: "Months",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Months_RelationshipId",
                table: "Months",
                column: "RelationshipId");

            migrationBuilder.AddForeignKey(
                name: "FK_Months_Relationships_RelationshipId",
                table: "Months",
                column: "RelationshipId",
                principalTable: "Relationships",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Months_Relationships_RelationshipId",
                table: "Months");

            migrationBuilder.DropIndex(
                name: "IX_Months_RelationshipId",
                table: "Months");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Relationships");

            migrationBuilder.DropColumn(
                name: "RelationshipId",
                table: "Months");
        }
    }
}
