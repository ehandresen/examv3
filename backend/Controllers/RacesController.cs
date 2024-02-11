using backend.Contexts;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    // context er 'hubben' inn til databasen
    private readonly F1Context context;
    public RacesController(F1Context _context)
    {
        context = _context;
    }


    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try
        {
            List<Race> races = await context.Races.ToListAsync();

            if (races is null)
                return NotFound("No races found");

            return Ok(races);
        }
        catch
        {
            return StatusCode(500); // Server error
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> GetById(int id)
    {
        try
        {
            Race? race = await context.Races.FindAsync(id);

            if (race is null)
                return NotFound($"No race with id '{id}'");

            return Ok(race);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("[action]/{grandPrix}")]
    public async Task<ActionResult<Race>> GetByGrandPrix(string grandPrix)
    {
        try
        {
            Race? race = await context.Races
                .FirstOrDefaultAsync(race => race.GrandPrix.ToLower().Contains(grandPrix.ToLower()));

            if (race is null)
                return NotFound($"Grand Prix containing '{grandPrix}' not found");

            return Ok(race);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("[action]/{maxLaps}")]
    public async Task<ActionResult<List<Race>>> GetMaxLaps(int maxLaps)
    {
        try
        {
            List<Race> races = await context.Races
                .Where(race => race.NumberOfLaps <= maxLaps)
                .ToListAsync();

            if (races is null || races.Count == 0)
                return NotFound($"No races with laps equal too or less then '{maxLaps}'");

            return Ok(races);
        }
        catch
        {
            return StatusCode(500);
        }

    }

    [HttpPost]
    public async Task<ActionResult<Race>> Post(Race newRace)
    {
        try
        {
            context.Races.Add(newRace);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = newRace.Id }, newRace);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<ActionResult<Race>> Put(Race updatedRace)
    {
        try
        {
            context.Entry(updatedRace).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        try
        {
            Race? race = await context.Races.FindAsync(id);

            if (race is null)
                return NotFound($"No race with id '{id}'");

            context.Races.Remove(race);
            await context.SaveChangesAsync();

            return NoContent(); // 204

        }
        catch
        {
            return StatusCode(500);
        }
    }

}