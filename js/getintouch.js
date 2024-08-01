document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const resultDiv = document.getElementById('result');

    
    const userID = 'QkuW5zPZ6UB6wDdDJ';
    const serviceID = 'service_xfv7m8t';
    const templateID = 'template_atfhiiv';


    emailForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const userName = event.target.userName.value; 
console.log(userName);
        const templateParams = {
            to_email: email,
            user_name: userName, 
            message: 'This is a test email from the browser using EmailJS',
        };

        const payload = {
            service_id: serviceID,
            template_id: templateID,
            user_id: userID,
            template_params: templateParams,
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const contentType = response.headers.get("content-type");

            if (response.ok) {
                const data = contentType && contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                resultDiv.textContent = 'Email sent successfully!';
                console.log('Email sent successfully:', data);
            } else {
                const errorData = contentType && contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                resultDiv.textContent = `Failed to send email: ${errorData}`;
                console.error('Failed to send email:', errorData);
            }
        } catch (error) {
            resultDiv.textContent = 'Error sending email.';
            console.error('Error sending email:', error);
        }
    });
});