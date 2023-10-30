import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
    <div>
        <h3 className="mb-4">Beranda</h3>

        <div className="bg-white justify-content-between gap-4 bgdashboard">

        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex p-4 roudned-3 bgwelcome">
            <div>
                <h6 className="textdashboard">Halo ! Selamat Datang di</h6>
                <h2 className="textdashboard2">E-TTP PLN TELLO</h2>
                <p className="textdashboard">E-TTP PLN TELLO adalah website khusus bagi para pegawai PLN UPDK Tello untuk membuat pelaporan terkait lembur, piket, serta premi dalam rangka digitalisasi proses administrasi yang memudahkan pegawai untuk melihat alur dan tracking dari laporannya.</p>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-between align-items-center gap-1 px-5 py-3">
            <div className="berandabox ">
                <div className="gradientbox" />
                <div >
                    <h2 className="textmenu">LEMBUR</h2>
                    <p className="textmenu_p">Lembur adalah waktu kerja tambahan yang dilakukan di luar jam kerja normal, lebih tepatnya melebihi 40 jam waktu kerja per minggu.</p>
                    <Link
                    to="lembur" 
                    className="px-3 py-2 text-white fw-bold text-center text-decoration-none fs-8 w-100 textmenu_button" 
                    style={{background: "#007DFA"}}type="submit"
                    >
                        Buka
                    </Link>
                </div>
            </div>

            <div className="berandabox">
            <div className="gradientbox" />
                <div>
                    <h2 className="textmenu">PIKET</h2>
                    <p className="textmenu_p">Piket adalah tugas yang harus dilakukan oleh karyawan di luar jam kerja normal, biasanya pada malam hari atau akhir pekan.</p>
                    <Link
                    to="/admin" 
                    className="px-3 py-2 text-white fw-bold text-center text-decoration-none fs-8 w-100 textmenu_button" 
                    style={{background: "#007DFA"}}type="submit"
                    >
                        Buka
                    </Link>
                </div>
            </div>

            <div className="berandabox">
            <div className="gradientbox" />
                <div>
                    <h2 className="textmenu">PREMI</h2>
                    <br></br>
                    <p className="textmenu_p">Premi adalah imbalan yang diberikan kepada karyawan atas kinerjanya yang melebihi standar.</p>
                    <Link
                    to="/admin" 
                    className="px-3 py-2 text-white fw-bold text-center text-decoration-none fs-8 w-100 textmenu_button" 
                    style={{background: "#007DFA"}}type="submit"
                    >
                        Buka
                    </Link>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Dashboard;