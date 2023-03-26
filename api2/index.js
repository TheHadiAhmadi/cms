import polka from 'polka'


const app = polka()

app.use('/', (req, res) => {
    res.send('Hello World!')
})

const { PORT = 3000 } = process.env
app.listen(PORT, () => console.log('App started on port ' + PORT))