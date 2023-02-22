import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept.</p>
		</Modal>
	);

	return (
		<div className='relavtive'>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nunc feugiat viverra ex vitae vulputate. Ut elit dui,
				pharetra fermentum viverra eget, aliquet sit amet eros.
				Suspendisse eget malesuada mi. Integer risus erat, luctus
				imperdiet elit sed, faucibus rutrum ante. Sed consectetur
				iaculis tellus, sed sollicitudin mi euismod quis. Sed
				laoreet odio nibh, nec elementum mi consectetur vitae.
				Phasellus justo metus, ornare efficitur ipsum sed, varius
				facilisis ligula. Aliquam odio lacus, fermentum et aliquam
				in, pulvinar vitae sapien. Integer placerat malesuada orci
				in mattis. Etiam a vulputate augue. Nullam id sapien eu
				lorem sodales venenatis. Suspendisse aliquet arcu in erat
				ultrices sodales. Vivamus tincidunt aliquet metus, ac
				faucibus nisl. Aliquam placerat posuere diam, ac hendrerit
				augue fermentum in. Phasellus luctus nisl non justo tempus
				lacinia. Vivamus neque est, viverra vitae blandit vel,
				accumsan quis augue. Donec vel molestie lacus. In porttitor
				magna turpis, eget iaculis orci fringilla eget. Curabitur a
				pellentesque dolor. Etiam facilisis mi sed elit tincidunt,
				id tincidunt ante auctor. Duis maximus lorem sit amet ligula
				laoreet tincidunt. In tempor, metus sit amet elementum
				fermentum, felis urna tincidunt nunc, eget molestie ex
				ligula a arcu. Vestibulum commodo feugiat rutrum. Sed
				dapibus eu dolor dictum euismod. Aenean commodo diam nec
				suscipit mattis. Phasellus porta eros ut lorem interdum,
				eget fringilla nisl aliquet. Donec gravida tellus eleifend
				diam semper, at porta nibh aliquam. Morbi quis aliquam ex.
				Pellentesque a metus id erat accumsan condimentum et vel
				leo. Ut sit amet tristique lectus, vel pulvinar neque. Donec
				sodales imperdiet lorem, eget molestie dui vulputate vitae.
				Nam sed sapien in augue condimentum rhoncus. Mauris nulla
				urna, maximus et pretium id, euismod quis metus. Sed vel
				nunc sit amet erat suscipit dictum non ut elit. Fusce
				sagittis mollis elementum. Duis viverra nulla justo, sit
				amet semper sapien malesuada at. Ut sodales nibh at vehicula
				ullamcorper. In maximus urna metus, in ultrices massa
				condimentum nec. Duis sit amet ornare ex, eget posuere sem.
				Mauris in nunc nunc. Aenean aliquet, tortor quis maximus
				tempor, quam sem bibendum erat, sit amet venenatis dui neque
				id arcu. Quisque pretium mi nec tincidunt dignissim.
				Pellentesque ex eros, viverra ac mollis ut, porta venenatis
				lacus. Duis malesuada tempus molestie. Fusce tincidunt augue
				ac posuere malesuada. Nullam ut nisi sit amet est sodales
				finibus. Praesent condimentum fringilla nisl. Etiam auctor
				tortor quis egestas commodo. Morbi ut magna lectus. Nam et
				eleifend neque. Proin tempus felis vitae tellus rutrum, non
				scelerisque tellus tempus. Morbi dolor nibh, tempor bibendum
				mollis dapibus, dapibus non enim. Phasellus non imperdiet
				dui, auctor varius felis. Nulla a eros neque. Vivamus
				convallis placerat nunc ut efficitur. Mauris suscipit
				vulputate nibh, non pellentesque felis consectetur nec.
				Praesent at erat et felis vestibulum ornare sed sit amet
				urna. Nam consectetur, felis ullamcorper rhoncus porta, arcu
				nulla mollis nisi, a rhoncus elit elit vel lacus. Quisque mi
				felis, condimentum at libero ac, dignissim rhoncus turpis.
				Aliquam rutrum pellentesque diam a placerat. Cras eget est
				ac enim sollicitudin tincidunt et vitae elit. Suspendisse at
				egestas risus. Nulla justo nisi, lobortis vitae aliquam eu,
				finibus ac justo. Praesent et eros vitae nisl gravida
				congue.
			</p>
		</div>
	);
}

export default ModalPage;
