# Gemini Clone - AI Chat Application

A modern, responsive AI chat application built with React that mimics Google's Gemini interface. Features include real-time AI conversations, chat history management, and a beautiful user interface.

## ✨ Features

### 🤖 AI Chat Capabilities
- **Real-time AI Responses**: Powered by Gemini AI API for intelligent conversations
- **Rich Text Formatting**: Supports bold text and markdown-style formatting
- **Loading States**: Smooth loading animations while waiting for AI responses
- **Error Handling**: Graceful error handling for API failures

### 💬 Chat Management
- **New Chat Creation**: Start fresh conversations anytime with the new chat button
- **Chat History**: Automatic saving and organization of all conversations
- **Chat Continuity**: Continue previous conversations seamlessly
- **Smart Context**: Maintains conversation context within the same chat session

### 🎨 User Interface
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface inspired by Google's design language
- **Dark/Light Theme**: Comfortable viewing in any lighting condition
- **Smooth Animations**: Elegant transitions and hover effects throughout

### 📱 Sidebar Features
- **Collapsible Sidebar**: Expandable sidebar for better space utilization
- **Recent Chats**: Quick access to all previous conversations
- **Chat Previews**: See the first 30 characters of each conversation
- **Smart Timestamps**: Relative time display (e.g., "5m ago", "2h ago")
- **Active Chat Highlighting**: Visual indication of current conversation
- **Chat Management**: Delete individual chats or clear all history

### 🔧 Advanced Features
- **Session Persistence**: Chat data persists during the browser session
- **Input Validation**: Smart input handling and user feedback
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance Optimized**: Efficient rendering and state management

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Gemini AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Geminicloneeee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Gemini API**
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Update the API configuration in `src/config/gemini.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start chatting with Gemini!

## 🏗️ Project Structure

```
Geminicloneeee/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── Main/         # Main chat interface
│   │   └── Sidebar/      # Chat history sidebar
│   ├── config/           # API configuration
│   ├── context/          # React context for state management
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎯 Usage Guide

### Starting a New Chat
1. Click the **+** icon in the sidebar, or
2. Click the **"New Chat"** button in the main navigation
3. Type your message and press Enter or click the send button

### Managing Chat History
1. **View History**: Expand the sidebar to see all recent conversations
2. **Load Previous Chat**: Click on any chat in the sidebar to continue
3. **Delete Individual Chat**: Click the × button next to any chat
4. **Clear All History**: Use the "Clear All" button in the sidebar

### Chat Features
- **Send Messages**: Type in the input box and press Enter
- **Attach Files**: Use the gallery icon to attach images
- **Voice Input**: Click the microphone icon for voice input
- **Format Text**: Use markdown-style syntax for rich formatting

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **State Management**: React Context API
- **AI Integration**: Google Gemini API
- **Package Manager**: npm

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### API Configuration
Update `src/config/gemini.js` with your API settings:

```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
```

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full-featured experience with expanded sidebar
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with collapsible sidebar

## 🎨 Customization

### Styling
- Modify CSS files in `src/components/` to customize appearance
- Update color schemes in CSS variables
- Adjust spacing and typography as needed

### Features
- Add new chat capabilities in the Context
- Extend the sidebar with additional options
- Implement new UI components as needed



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the AI capabilities
- **React Team** for the amazing framework
- **Vite** for the fast build tool
- **Open Source Community** for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for existing solutions
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Chat export functionality
- [ ] Advanced formatting options
- [ ] Multi-language support
- [ ] Chat sharing capabilities
- [ ] Offline mode support
- [ ] Advanced search in chat history
- [ ] Custom AI model selection

---

**Happy Chatting! 🚀**

Built with ❤️ using React and Gemini AI 