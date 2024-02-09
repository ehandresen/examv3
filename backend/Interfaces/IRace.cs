namespace backend.Interfaces;

public interface IRace
{
    int Id { get; set; }
    string? GrandPrix { get; set; }
    string? WinnerName { get; set; }
    string? WinnerTime { get; set; }
    int NumberOfLaps { get; set; }
    string? Image { get; set; }
}