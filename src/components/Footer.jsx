import './Footer.css';
import 'font-awesome/css/font-awesome.min.css'

const Footer = () => {
	return (
		<>
		<footer>
			<div class="info">
				<div class="info-box">
				<h3>Address</h3>
				<p>eBAJA Workshop, St Joseph Engineering College,<br></br>
				Vamanjoor, Mangalore (575028),<br></br>
				Karnataka, IN</p>
    			</div>
				<div class="info-box">
					<h3>Email</h3>
					<p>team.esjecracing@sjec.ac.in</p>
				</div>
				<div class="info-box">
					<h3>Phone</h3>
					<p>+91 123456789</p>
				</div>
			</div>
			<div class="socials">
				<a href="https://www.linkedin.com/company/achillius-sjec/?originalSubdomain=in"><i
				class="fa-brands fa-linkedin"></i></a>
				<a href="https://www.instagram.com/teamachilliussjec/?hl=en"><i
				class="fa-brands fa-instagram"></i></a>
				<a href="https://www.facebook.com/profile.php?id=100066447856039"><i
				class="fa-brands fa-facebook-square"></i></a>
				<a href="https://www.youtube.com/channel/UCBric8Nx25guayXRucwqd_Q/featured"><i
				class="fa-brands fa-youtube"></i></a>
			</div>
			<div class="footerBottom">
				<p>Copyright &copy;<span id="currentYear"></span>. GDSC SJEC</p>
			</div>
		</footer>
		</>
	)
};

export default Footer;
