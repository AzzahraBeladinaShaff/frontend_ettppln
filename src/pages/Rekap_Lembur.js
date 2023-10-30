import React from "react";
import { Space, Table, Tag } from "antd";
import { MdSimCardDownload } from "react-icons/md";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Waktu Pembuatan",
    dataIndex: "pembuatan",
    key: "pembuatan",
  },
  {
    title: "Waktu Kegiatan",
    dataIndex: "kegiatan",
    key: "kegiatan",
  },
  {
    title: "Durasi",
    dataIndex: "durasi",
    key: "durasi",
  },
  {
    title: "Pekerjaan Kerja Lebih",
    dataIndex: "pekerjaan",
    key: "pekerjaan",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "ditolak") {
            color = "volcano";
          }
          if (tag === "disetujui") {
            color = "green";
          }
          if (tag === "menunggu") {
            color = "geekblue";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Nominal",
    dataIndex: "nominal",
    key: "nominal",
  },
  {
    title: "Aksi",
    key: "aksi",
    render: (_, record) => (
      <Space size="middle">
        <MdSimCardDownload className="fs-5 d-flex justify-content-center text-center" />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    no: 1,
    pembuatan: "17/08/2023;09.50",
    kegiatan: "17/08/2023;05.50",
    durasi: 2,
    pekerjaan: "Lembur Operasional Pembangkit",
    tags: ["disetujui"],
    nominal: "50.000",
  },
  {
    key: "2",
    no: 2,
    pembuatan: "17/08/2023;09.50",
    kegiatan: "17/08/2023;05.50",
    durasi: 5,
    pekerjaan: "Lembur Operasional Pembangkit",
    tags: ["ditolak"],
    nominal: 0,
  },
  {
    key: "3",
    no: 3,
    pembuatan: "17/08/2023;09.50",
    kegiatan: "17/08/2023;05.50",
    durasi: 2,
    pekerjaan: "Lembur Operasional Pembangkit",
    tags: ["menunggu"],
    nominal: "50.000",
  },
  {
    key: "4",
    no: 4,
    pembuatan: "17/08/2023;09.50",
    kegiatan: "17/08/2023;05.50",
    durasi: 5,
    pekerjaan: "Lembur Operasional Pembangkit",
    tags: ["ditolak"],
    nominal: 0,
  },
];
const Rekap_Lembur = () => {
  return (
    <div>
      <h3 className="mb-4">Rekap</h3>

      <div className="bg-white justify-content-between gap-4 bglembur">
        <div>
          <h3 className="biru judul_font">Mari Kepoin Seluruh Laporan/Surat yang Sudah Kamu Buat!</h3>
          <p className="text_isi buram">
            Pilih fitur untuk menampilkan data rekap!
          </p>

          <div className="d-flex gap-3 text_label">
          <Link
            to="/admin/rekap_lembur" 
            className="px-3 py-2 text-white fw-bold text-decoration-none fs-8 tombol"
            style={{ background: "#007DFA" }}
            type="submit"
            >
                Lembur
            </Link>
            <Link
            to="/admin/rekap_piket" 
            className="px-3 py-2 text-white fw-bold text_center text-decoration-none fs-8  tombol"
            style={{ background: "#B6B6B6" }}
            type="submit"
            >
                Piket
            </Link>
            <Link
            to="/admin/rekap_premi" 
            className="px-3 py-2 text-white fw-bold text_center text-decoration-none fs-8  tombol"
            style={{ background: "#B6B6B6" }}
            type="submit"
            >
                Premi
            </Link>
        </div>

          <div className="text_label">
            <p className="catatan catatan_top">Catatan:</p>
            <ol className="catatan"> 
                <li>Satuan yang digunakan adalah</li>
                <li>Derajat yang digunakan adalah</li>
                <li>Nominal berdasarkan hasil rumus</li>
            </ol>
          </div>

          
          <div>
            <Table className="px-4 py-3" columns={columns} dataSource={data} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekap_Lembur;
