import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
	const handleClick = () => {};

	return (
		<div>
			<div>
				<Button secondary onClick={handleClick} className='mb-5'>
					<GoBell />
					Click Here!
				</Button>
			</div>
			<div>
				<Button onMouseEnter={handleClick} danger outline>
					<GoCloudDownload />
					Buy Now
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase />
					Sign Up
				</Button>
			</div>
			<div>
				<Button success>Log In</Button>
			</div>
			<div>
				<Button secondary rounded outline>
					See Deal!
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
