import express from 'express';
import Docker from 'dockerode';

const router = express.Router();
const docker = new Docker();

// create rand numer for container name

``

router.post('/create-container', async (req, res) => {
    const rand = Math.floor(Math.random() * 1000);

// Hardcoded values for image and name
const image =  'python'; // Example image
const name = 'prompt-flow-container' +"122"+ rand; // Example container name
    try {
        // Create a new Docker container
        const container = await docker.createContainer({
            Image: image,
            name: name,
            Tty: true,
            HostConfig: {
                Binds: ['E:/Prompt-flow/api-server/langchain:/app/langchain'], // Mount langchain folder to /app/langchain in the container
            },
            Cmd: [
                'sh', '-c',
                'pip install -r /app/langchain/requirements.txt || true; python3 /app/langchain/main.py'
            ]
        });
        

        // Start the container
        await container.start();

        res.status(201).json({ message: 'Container created and started.', containerId: container.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create container.', details: error.message });
    }
});

export default router;
