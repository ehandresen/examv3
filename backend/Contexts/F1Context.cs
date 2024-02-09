using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Contexts;

public class F1Context : DbContext
{
    public F1Context(DbContextOptions<F1Context> options) : base(options)
    { }

    public DbSet<Race> Races { get; set; }
}