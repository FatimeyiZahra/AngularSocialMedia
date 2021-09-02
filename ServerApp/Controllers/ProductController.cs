using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Data;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        private static List<Product> _products; //ctrl + . for import
        private readonly SocialContext _context;
        public ProductController(SocialContext context)
        {
            _context = context;
        }

        //localhost:500/api/product
        [HttpGet]
        public async Task<ActionResult> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetProduct(int id)
        {
            var p = await _context.Products.FirstOrDefaultAsync(i => i.id == id);
            if (p == null)
            {
                return NotFound();
            }
            return Ok(p);
        }

        [HttpPost]
        public async Task<ActionResult> CreateProduct(Product prd)
        {
            _context.Products.Add(prd);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = prd.id }, prd);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product prd)
        {
            if (id != prd.id)
            {
                return BadRequest();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            product.Name = prd.Name;
            product.Price = prd.Price;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return NotFound();
            }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}