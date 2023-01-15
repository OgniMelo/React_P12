import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './styles/index.sass'

axios.defaults.baseURL = 'http://localhost:3000/user'
/*
http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
