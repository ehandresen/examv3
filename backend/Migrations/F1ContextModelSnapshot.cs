﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Contexts;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(F1Context))]
    partial class F1ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("backend.Models.Race", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("GrandPrix")
                        .HasColumnType("TEXT");

                    b.Property<string>("Image")
                        .HasColumnType("TEXT");

                    b.Property<int>("NumberOfLaps")
                        .HasColumnType("INTEGER");

                    b.Property<string>("WinnerName")
                        .HasColumnType("TEXT");

                    b.Property<string>("WinnerTime")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Races");
                });
#pragma warning restore 612, 618
        }
    }
}
