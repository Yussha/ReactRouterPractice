import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    const data = useActionData();

    return (
        <div className="contact bg-red-900">
            <h3>Contact Us</h3>
            <Form method="post" className="flex items-center flex-row gap-2">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required className="resize-none"></textarea>
                </label>
                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}

export const contactAction = async ({ request }) => {
    console.log(request)

    const data = await request.formData()
    console.log(data)

    const submission = {
        email: data.get('email'),
        message: data.get('message'),
    }

    console.log(submission)

    if (submission.message.length < 10) {
        return { error: 'Message too short' }
    }

    return redirect('/')
}