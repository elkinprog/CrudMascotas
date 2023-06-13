using Microsoft.EntityFrameworkCore;
using MascotasAPI.Models;
using MascotasAPI.FluentConfig;

namespace MascotasAPI.Context
{
    public class MascotasContext:  DbContext
    {
    public MascotasContext(DbContextOptions options): base (options){}

    protected override void OnModelCreating(ModelBuilder modelBuilder){

        base.OnModelCreating(modelBuilder);

            new MascotasConfig(modelBuilder.Entity<Mascotas>());
          
        }

        public  DbSet<Mascotas>     Mascotas {get; set;}
       
    }
}