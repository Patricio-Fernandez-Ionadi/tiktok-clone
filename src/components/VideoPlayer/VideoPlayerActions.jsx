import styles from './styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function VideoPlayerActions() {
	return (
		<aside className={styles.actions}>
			<div className={styles.action}>
				<FavoriteIcon />
			</div>
			<div className={styles.action}>
				<FavoriteIcon />
			</div>
			<div className={styles.action}>
				<FavoriteIcon />
			</div>
		</aside>
	)
}
