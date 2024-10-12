import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
          id: 1,
          title: 'Why do programmers prefer dark mode?',
          content: 'Because the light attracts bugs!'
        },
        {
          id: 2,
          title: 'How many programmers does it take to change a light bulb?',
          content: 'None. It\'s a hardware problem.'
        },
        {
          id: 3,
          title: 'What is a programmer\'s favorite hangout place?',
          content: 'Foo Bar.'
        },
        {
          id: 4,
          title: 'Why do Java developers wear glasses?',
          content: 'Because they don\'t see sharp.'
        },
        {
          id: 5,
          title: 'I got a new job at a programming firm, but they fired me after my first day.',
          content: 'Apparently, I didn\'t get the array of things done!'
        },
        {
          id: 6,
          title: 'Why do programmers hate nature?',
          content: 'It has too many bugs.'
        }
      ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);
