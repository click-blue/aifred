// components/ChatBody.js

import React, { useEffect, useRef } from 'react';
import styles from './ChatBody.module.css';
import ChatMessage from './ChatMessage';

function ChatBody({ chat, isLoading, isError }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chat, isLoading, isError]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className={styles.chatBody} ref={chatContainerRef}>
      <div className={styles.chatContainer}>
        <ChatMessage
          message="Falaí jão!"
          user={false}
          className={styles.introMessage}
        />

{chat.map((message, index) => (
  <ChatMessage
    key={index}
    message={message.message}
    user={message.role === 'user'}
    totalTokens={message.totalTokens}
  />
))}


        {isLoading && (
          <ChatMessage
            message="Peraí, to pensando"
            user={false}
            className={styles.loadingMessage}
          />
        )}

        {isError && (
          <ChatMessage
            message="Deu ruim, tenta de novo."
            user={false}
            className={styles.errorMessage}
          />
        )}

        <div className={styles.spacer}></div>
      </div>
    </div>
  );
}

export default ChatBody;
