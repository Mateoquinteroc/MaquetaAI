import './Chat.css'
const Chat = () => {
    return(
        <div>
            <df-messenger
                location="us-central1"
                project-id="gen-lang-client-0115037636"
                agent-id="a1013de9-2d4d-4c43-bd51-f54a611e79bc"
                language-code="en"
                max-query-length="-1">
            <df-messenger-chat-bubble
                chat-title="ASCIA 1.0">
                    </df-messenger-chat-bubble>
            </df-messenger>
        </div>
    )
}

export default Chat