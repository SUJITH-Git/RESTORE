using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    { 
        public static void Initialize(StoreContext context)
        {

           if(context.Products.Any())return;
            var Products = new List<Product>
            {
             		new Product
                {
                    Name = "Angular Speedster Board 2000",
                    Price = 20000,
                    PictureUrl = "/images/products/sb-ang1.png",
                    Brand = "Angular",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Green Angular Board 3000",
                    Price = 15000,
                    PictureUrl = "/images/products/sb-ang2.png",
                    Brand = "Angular",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Core Board Speed Rush 3",
                    Price = 18000,
                    PictureUrl = "/images/products/sb-core1.png",
                    Brand = "NetCore",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Net Core Super Board",
                    Price = 30000,
                    PictureUrl = "/images/products/sb-core2.png",
                    Brand = "NetCore",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "React Board Super Whizzy Fast",
                    Price = 25000,
                    PictureUrl = "/images/products/sb-react1.png",
                    Brand = "React",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Typescript Entry Board",
                    Price = 12000,
                    PictureUrl = "/images/products/sb-ts1.png",
                    Brand = "TypeScript",
                    Type = 1,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Core Blue Hat",
                    Price = 1000,
                    PictureUrl = "/images/products/hat-core1.png",
                    Brand = "NetCore",
                    Type = 2,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Green React Woolen Hat",
                    Price = 8000,
                    PictureUrl = "/images/products/hat-react1.png",
                    Brand = "React",
                    Type = 2,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Purple React Woolen Hat",
                    Price = 1500,
                    PictureUrl = "/images/products/hat-react2.png",
                    Brand = "React",
                    Type = 2,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Blue Code Gloves",
                    Price = 1800,
                    PictureUrl = "/images/products/glove-code1.png",
                    Brand = "VS Code",
                    Type = 3,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Green Code Gloves",
                    Price = 1500,
                    PictureUrl = "/images/products/glove-code2.png",
                    Brand = "VS Code",
                    Type = 3,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Purple React Gloves",
                    Price = 1600,
                    PictureUrl = "/images/products/glove-react1.png",
                    Brand = "React",
                    Type = 3,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Green React Gloves",
                    Price = 1400,
                    PictureUrl = "/images/products/glove-react2.png",
                    Brand = "React",
                    Type = 3,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Redis Red Boots",
                    Price = 25000,
                    PictureUrl = "/images/products/boot-redis1.png",
                    Brand = "Redis",
                    Type = 4,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Core Red Boots",
                    Price = 18999,
                    PictureUrl = "/images/products/boot-core2.png",
                    Brand = "NetCore",
                    Type = 4,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Core Purple Boots",
                    Price = 19999,
                    PictureUrl = "/images/products/boot-core1.png",
                    Brand = "NetCore",
                    Type = 4,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Angular Purple Boots",
                    Price = 15000,
                    PictureUrl = "/images/products/boot-ang2.png",
                    Brand = "Angular",
                    Type = 4,
                    QuandityInStock = 100
                },
                new Product
                {
                    Name = "Angular Blue Boots",
                    Price = 18000,
                    PictureUrl = "/images/products/boot-ang1.png",
                    Brand = "Angular",
                    Type = 4,
                    QuandityInStock = 100
                },
            };
            //adding the seed data to the Product table
            foreach (var product in Products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();
        }
    }
}