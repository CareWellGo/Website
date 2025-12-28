function Show_User_Message(Text) {
    const Chat_Body = document.getElementById("Chat_Body")
    const Msg = document.createElement("div")
    Msg.className = "Message_User"
    Msg.innerText = Text
    Chat_Body.appendChild(Msg)
    Chat_Body.scrollTop = Chat_Body.scrollHeight
}

function Show_Bot_Message(Text) {
    const Chat_Body = document.getElementById("Chat_Body")
    const Msg = document.createElement("div")
    Msg.className = "Message_Bot"
    Msg.innerText = Text
    Chat_Body.appendChild(Msg)
    Chat_Body.scrollTop = Chat_Body.scrollHeight
}