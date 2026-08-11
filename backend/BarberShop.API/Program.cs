using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddSwaggerGen();


builder.Services.AddEndpointsApiExplorer(); 
builder.Services.AddOpenApi();



builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") 
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();



if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "wwwroot")),
    RequestPath = "" // Deixa o caminho limpo partindo da raiz da URL
});

app.UseCors("ReactApp");

// app.UseHttpsRedirection();
app.UseAuthorization();


app.MapControllers();
app.Run();
