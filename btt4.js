async function executePromises() {
    try {
        let result1 = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promise 1!"), 2000);
        });

        let result2 = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promise 2!"), 1000);
        });

        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Gọi hàm để thực thi Promise với async/await
executePromises();
