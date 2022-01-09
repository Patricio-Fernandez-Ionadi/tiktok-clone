import styles from './styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes'
import ShareIcon from '@mui/icons-material/Share'

export default function VideoPlayerActions({
	likes = 2041,
	comments = 333,
	shares = 520,
	hearted = false,
}) {
	return (
		<aside className={styles.actions}>
			<div className={styles.action}>
				<FavoriteIcon />
				<strong title='like'>{likes}</strong>
			</div>
			<div className={styles.action}>
				<SpeakerNotesIcon />
				<strong title='comments'>{comments}</strong>
			</div>
			<div className={styles.action}>
				<ShareIcon />
				<strong title='shares'>{shares}</strong>
			</div>
		</aside>
	)
}
