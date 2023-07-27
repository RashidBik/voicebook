 <!-- <script>
            const socket = io();
            const messageForm = document.getElementById('message-form');
            const messageInput = document.getElementById('message-input');
            const messages = document.getElementById('messages');
            messageForm.addEventListener('submit', (e) =>
            {
                e.preventDefault();
                const message = messageInput.value;
                socket.emit('chat-message', message);
                messageInput.value = '';
            });
            socket.on('chat-message', (message) =>
            {
                const messageElement = document.createElement('div');
                messageElement.innerText = message;
                messages.appendChild(messageElement);
            });
        </script> -->