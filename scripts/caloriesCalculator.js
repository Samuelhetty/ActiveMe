document.getElementById("caloriesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let workouts = parseInt(document.getElementById("workouts").value);
    let duration = parseInt(document.getElementById("duration").value);
    if (workouts <= 0 || duration <= 0) {
        alert("Please enter valid values for workouts and duration.");
        return;
    }
    const caloriesPerWorkout = 100; // Assuming 100 calories burned per workout
    const caloriesPerMinute = 10; // Assuming 10 calories burned per minute of workout
    let totalCalories = (workouts * caloriesPerWorkout) + (duration * caloriesPerMinute);
    document.getElementById("result").innerHTML = `Total calories burned: ${totalCalories}`;
});