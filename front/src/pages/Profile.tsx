import { ReactElement, useState } from 'react'
import { DailyBoard, AverageSession, Performance, Score, Stats } from '../components/Data'
import getData from '../utils/getData'

/**
@function
@returns {React.ReactElement} - A React element containing data for user ID, user information, activity data, average data and performance data.
*/

export default (): ReactElement => {
	const [userId, setUserId] = useState<number>(12)

	const userInformations = getData(userId, 'infos')
	const activityData = getData(userId, 'activity')
	const avgData = getData(userId, 'average-sessions')
	const performanceData = getData(userId, 'performance')

	return (
		<div className='profile-page'>
			<h2>
				Bonjour <span onClick={() => setUserId((prev) => (prev === 12 ? 18 : 12))}>{userInformations?.userInfos?.firstName ?? 'Invité'}</span>
			</h2>
			{!(userInformations && activityData && avgData && performanceData) ? <p>Une erreur s'est produite lors de la récupération des données</p> : <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>}
			<main id='data'>
				<div>
					{activityData ? <DailyBoard data={activityData.sessions} /> : <DailyBoard />}
					<div>
						{avgData ? <AverageSession data={avgData.sessions} /> : <AverageSession />}
						{performanceData ? <Performance kind={performanceData.kind} data={performanceData.data} /> : <Performance />}
						{userInformations ? <Score data={userInformations.todayScore || userInformations.score} /> : <Score />}
					</div>
				</div>
				<div id='stats'>
					<Stats name='Calories' img='./images/fire.png' value={userInformations?.keyData?.calorieCount ?? 0} unit='kCal' />
					<Stats name='Protéines' img='./images/chicken.png' value={userInformations?.keyData?.proteinCount ?? 0} unit='g' />
					<Stats name='Glucides' img='./images/apple.png' value={userInformations?.keyData?.carbohydrateCount ?? 0} unit='g' />
					<Stats name='Lipides' img='./images/burger.png' value={userInformations?.keyData?.lipidCount ?? 0} unit='g' />
				</div>
			</main>
		</div>
	)
}
