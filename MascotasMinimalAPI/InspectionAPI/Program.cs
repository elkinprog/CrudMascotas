using MascotasAPI.Context;
using MascotasAPI.Router;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;



var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddDbContext<MascotasContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.WithOrigins("http://localhost:4200")

                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});


builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Mascotas API",
        Description = "Test Mascotas API",
        Version = "v1"
    });
});



var app = builder.Build();

//using (var scope = app.Services.CreateScope())
//{
//    var services = scope.ServiceProvider;
//    var context = services.GetRequiredService<InspectionContext>();
//    context.Database.Migrate();
//}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwagger();

    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mascotas API v1");
    });

}



app.MapGroup("/api/")
   .Mascota()
   .WithTags("Mascota");




app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();

app.Run();
