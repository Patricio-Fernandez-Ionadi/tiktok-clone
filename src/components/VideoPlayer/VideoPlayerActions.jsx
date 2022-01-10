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
	const handleLike = () => {
		alert('like')
	}
	const handleComment = () => {
		alert('comment')
	}
	const handleShare = () => {
		alert('share')
	}

	return (
		<aside className={styles.actions}>
			<button className={styles.action} onClick={handleLike}>
				<FavoriteIcon />
				<span title='like'>{likes}</span>
			</button>

			<button className={styles.action} onClick={handleComment}>
				<SpeakerNotesIcon />
				<span title='comments'>{comments}</span>
			</button>

			<button className={styles.action} onClick={handleShare}>
				<ShareIcon />
				<span title='shares'>{shares}</span>
			</button>
		</aside>
	)
}
