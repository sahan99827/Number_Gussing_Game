        let randomNum = Math.floor(Math.random() * 10) + 1;
        let attempts = 0;
        const maxAttempts = 3;

        // Create background particles
        function createParticles() {
            const particles = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = Math.random() * 5 + 3 + 'px';
                particle.style.height = particle.style.width;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = Math.random() * 3 + 4 + 's';
                particles.appendChild(particle);
            }
        }

        createParticles();

        // Allow Enter key to submit
        document.getElementById('userGuess').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });

        function checkGuess() {
            const userGuess = Number(document.getElementById("userGuess").value);
            const result = document.getElementById("result");
            const attemptsDisplay = document.getElementById("attemptsDisplay");

            // Input validation
            if (userGuess < 1 || userGuess > 10 || isNaN(userGuess) || userGuess === 0) {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Input!",
                    text: "Please enter a valid number between 1 and 10.",
                    position: "center",
                    timer: 2000,
                    showConfirmButton: false,
                    backdrop: `rgba(0,0,0,0.4)`
                });
                return;
            }

            attempts++;

            // Correct guess - WIN!
            if (userGuess === randomNum) {
                result.textContent = "🎉 Congratulations! You guessed the correct number!";
                result.style.color = "#10b981";
                attemptsDisplay.innerHTML = `<span class="attempts-badge">✨ Won in ${attempts} attempt${attempts > 1 ? 's' : ''}!</span>`;
                
                // Trigger flower celebration
                createFlowerCelebration();
                
                Swal.fire({
                    icon: "success",
                    title: "🏆 You Win!",
                    text: `Amazing! You guessed it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`,
                    confirmButtonText: "Play Again",
                    confirmButtonColor: "#667eea",
                    backdrop: `rgba(0,0,0,0.4)`
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetGame();
                    }
                });
                
                disableGame();
            }
            // Wrong guess but still have attempts left
            else if (attempts < maxAttempts) {
                if (userGuess < randomNum) {
                    result.textContent = `📉 Too low! Try a higher number.`;
                } else {
                    result.textContent = `📈 Too high! Try a lower number.`;
                }
                result.style.color = "#f59e0b";
                attemptsDisplay.innerHTML = `<span class="attempts-badge">${maxAttempts - attempts} attempt${maxAttempts - attempts > 1 ? 's' : ''} remaining</span>`;
                
                // Clear input for next guess
                document.getElementById("userGuess").value = "";
                document.getElementById("userGuess").focus();
            }
            // Out of attempts - LOSE
            else {
                result.textContent = `❌ Game Over! The correct number was ${randomNum}.`;
                result.style.color = "#ef4444";
                attemptsDisplay.innerHTML = `<span class="attempts-badge" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">No attempts left</span>`;
                
                Swal.fire({
                    icon: "error",
                    title: "Game Over!",
                    text: `The correct number was ${randomNum}. Better luck next time!`,
                    confirmButtonText: "Try Again",
                    confirmButtonColor: "#667eea",
                    backdrop: `rgba(0,0,0,0.4)`
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetGame();
                    }
                });
                
                disableGame();
            }
        }

        function createFlowerCelebration() {
            const flowers = ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '💐', '🏵️'];
            const confettiColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
            
            // Create 50 flowers
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const flower = document.createElement('div');
                    flower.className = 'flower';
                    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
                    flower.style.left = Math.random() * 100 + '%';
                    flower.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    flower.style.animationDelay = Math.random() * 0.5 + 's';
                    document.body.appendChild(flower);
                    
                    setTimeout(() => flower.remove(), 3500);
                }, i * 50);
            }
            
            // Create confetti
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    confetti.style.animationDelay = Math.random() * 0.3 + 's';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3500);
                }, i * 30);
            }
        }

        function disableGame() {
            document.getElementById("userGuess").disabled = true;
            document.querySelector(".play-btn").disabled = true;
        }

        function resetGame() {
            randomNum = Math.floor(Math.random() * 10) + 1;
            attempts = 0;
            document.getElementById("userGuess").disabled = false;
            document.querySelector(".play-btn").disabled = false;
            document.getElementById("userGuess").value = "";
            document.getElementById("result").textContent = "";
            document.getElementById("attemptsDisplay").innerHTML = "";
            document.getElementById("userGuess").focus();
        }

        // Focus input on load
        window.onload = function() {
            document.getElementById("userGuess").focus();
        };
    