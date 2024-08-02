document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const resultDiv = document.getElementById('result');

    
    const userID = 'QkuW5zPZ6UB6wDdDJ';
    const serviceID = 'service_xfv7m8t';
    const templateID = 'template_atfhiiv';


    emailForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let replyto = event.target.email.value;
        let fristName = event.target.name.value; 
        let lastName = event.target.lastName.value; 

        const subject = event.target.subject.value; 
        const message = event.target.message.value; 
        let userName = fristName + ' ' + lastName;

        let to_email = replyto + ', kensindytomjerry@gmail.com';
        const templateParams = {
            to_email: to_email,
            user_name: userName, 
            subject: subject,
            message: message,
            sender_email: replyto,
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

            const now = new Date();
            const dateTimeString = now.toLocaleString(); 
            if (response.ok) {
                const data = contentType && contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                resultDiv.textContent = `${dateTimeString}: Email sent successfully!`;
            } else {
                const errorData = contentType && contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                resultDiv.textContent = `${dateTimeString}：Failed to send email, please try to contact us by sending email manually.`;
                console.error('Failed to send email:', errorData);
            }
        } catch (error) {
            //resultDiv.textContent = 'Error sending email.';
            resultDiv.textContent = `${dateTimeString}：Failed to send email, please try to contact us by sending email manually.`;
            console.error('Error sending email:', error);
        }
    });
});