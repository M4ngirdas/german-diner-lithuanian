
import nodemailer from "nodemailer"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

app.post("/api/reserve", async (request, response) => {
    const { nameValue, emailValue, selectedTable } = request.body

    try {
        const selectedTableId = selectedTable?.id ?? "unknown"
        const selectedTableSeats = selectedTable?.seats ?? "unknown"

        await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: process.env.RESTAURANT_EMAIL,
            subject: "New reservation",
            text: `A new reservation was confirmed
            
Name: ${nameValue}
Table: ${selectedTableId}
Seats: ${selectedTableSeats}`
        })

        await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: emailValue,
            subject: "Your reservation at BAVARIA LOUNGE is confirmed!",
            text: `Your reservation is confirmed!

Name: ${nameValue}
Table: ${selectedTableId}
Seats: ${selectedTableSeats}

We look forward in seeing you,

Have any questions? Contact us - ${process.env.FROM_EMAIL}
            `
        })

        response.json({ success: true })
    }
    catch (error) {
        console.log("Email error:", error)
        response.json({ success: false })
    }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))