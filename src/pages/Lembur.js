import React from 'react';
import { Space, Table, Tag, Select, Input, DatePicker, Button } from 'antd';
import { MdSimCardDownload } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);


const { Option } = Select;
const selectFilters = (
  <Select defaultValue="Filters"
  style={{ width: 100 }}>
    <Option value="wp">Waktu Pembuatan</Option>
    <Option value="wk">Waktu Kegiatan</Option>
    <Option value="dur">Durasi</Option>
    <Option value="st">Status</Option>
    <Option value="nom">Nominal</Option>
  </Select>
);

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Waktu Pembuatan',
    dataIndex: 'pembuatan',
    key: 'pembuatan',
  },
  {
    title: 'Waktu Kegiatan',
    dataIndex: 'kegiatan',
    key: 'kegiatan',
  },
  {
    title: 'Durasi',
    dataIndex: 'durasi',
    key: 'durasi',
  },
  {
    title: 'Pekerjaan Kerja Lebih',
    dataIndex: 'pekerjaan',
    key: 'pekerjaan',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'ditolak') {
            color = 'volcano';
          }
          if (tag === 'disetujui') {
            color = 'green';
          }
          if (tag === 'menunggu') {
            color = 'geekblue';
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
    title: 'Nominal',
    dataIndex: 'nominal',
    key: 'nominal',
  },
  {
    title: 'Aksi',
    key: 'aksi',
    render: (_, record) => (
      <Space size="middle">
        <MdSimCardDownload className="fs-5 d-flex justify-content-center text-center" />

      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    no: 1,
    pembuatan: '17/08/2023;09.50',
    kegiatan: '17/08/2023;05.50',
    durasi : 2,
    pekerjaan: 'Lembur Operasional Pembangkit',
    tags: ['disetujui'],
    nominal: '50.000',
  },
  {
    key: '2',
    no: 2,
    pembuatan: '17/08/2023;09.50',
    kegiatan: '17/08/2023;05.50',
    durasi : 5,
    pekerjaan: 'Lembur Operasional Pembangkit',
    tags: ['ditolak'],
    nominal: 0,
  },
  {
    key: '3',
    no: 3,
    pembuatan: '17/08/2023;09.50',
    kegiatan: '17/08/2023;05.50',
    durasi : 2,
    pekerjaan: 'Lembur Operasional Pembangkit',
    tags: ['menunggu'],
    nominal: '50.000',
  },
  {
    key: '4',
    no: 4,
    pembuatan: '17/08/2023;09.50',
    kegiatan: '17/08/2023;05.50',
    durasi : 5,
    pekerjaan: 'Lembur Operasional Pembangkit',
    tags: ['ditolak'],
    nominal: 0,
  },
];
const Lembur = () => {
  return (
    <div>
      <h3 className="mb-4">Lembur</h3>

      <div className="bg-white justify-content-between gap-4 bglembur">
        <div >
          <h3 className="biru judul_font">Buat Surat Perintah Kerja Lebih mu!</h3>
          <p className="text_isi buram">Silahkan isi dengan sebenar-benarnya!</p>

          <div className="d-flex gap-5">
          <div>
          <div className="d-flex gap-1">
            <h6 className="text_label">Kerja Lebih Hari/Tanggal</h6>
            <p className="grey"> (wajib diisi)</p>
          </div>
          <div className="text_label">
            <DatePicker style={{ width: 300 }}/>
            <p className="grey noted">Contoh: Sabtu/12 Agustus 2023</p>
          </div>
          </div>

          <div>
          <div className="d-flex gap-1">
            <h6 className="text_label">Jenis Hari</h6>
            <p className="grey"> (wajib diisi)</p>
          </div>
          <div className="text_label">
          <Select
              showSearch
              style={{ width: 300 }}
              placeholder="Pilih"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: 'kerja',
                  label: 'Hari Kerja',
                },
                {
                  value: 'libur_bersama',
                  label: 'Hari Libur Bersama',
                },
                {
                  value: 'libur_nasional',
                  label: 'Hari Libur Nasional',
                },
              ]}
              />
            <p className="grey noted">Contoh: Hari Libur Nasional</p>
          </div>
          </div> 
          </div>

          <div className="d-flex gap-1">
            <h6 className="text_label"> Pukul/Jam</h6>
            <p className="grey"> (wajib diisi)</p>
          </div>
          <div className="text_label">
            <div className="d-flex gap-2">
            <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
            <p>s/d</p>
            <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
            </div>
            <p className="grey noted">Contoh: 08.00 WITA s/d 15.00 WITA</p>
          </div>

          <div className="d-flex gap-1">
            <h6 className="text_label">Pekerjaan Kerja Lebih</h6>
            <p className="grey"> (wajib diisi)</p>
          </div>
          <div className="text_label">
            <Input placeholder="Isi disini" style={{ width: 300 }}/>
            <p className="grey noted">Contoh: Lembur Operasional Pembangkit</p>
          </div>
        </div>

        <div className="d-flex text_label gap-2">
        <Button
        className="px-3 py-2 text-white fw-bold text_center text-decoration-none fs-8  textmenu_button" 
        style={{background: "#007DFA", width: 100}}type="submit">
        Kirim
        </Button>
        <Button
        className="px-3 py-2 text-black fw-bold text_center text-decoration-none fs-8  textmenu_button border" 
        style={{width: 100}}type="submit">
        Batal
        </Button>
        </div>
          
          <div className="py-5">
            <div className="d-flex">
            <h4 className="biru judul_font2">Lihat History Kerja Lebih mu!</h4>

            <div className="d-flex history_lembur">
              <div className="select_bulan">
              <Space direction="vertical">
                <Input addonBefore={<AiOutlineSearch />} addonAfter={selectFilters} placeholder="Cari disini" />
              </Space>
              </div>

              <div className="select_bulan">
                <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Pilih Bulan disini"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: 'januari',
                    label: 'Januari',
                  },
                  {
                    value: 'februari',
                    label: 'Februari',
                  },
                  {
                    value: 'maret',
                    label: 'Maret',
                  },
                  {
                    value: 'april',
                    label: 'April',
                  },
                  {
                    value: 'mei',
                    label: 'Mei',
                  },
                  {
                    value: 'juni',
                    label: 'Juni',
                  },
                  {
                    value: 'juli',
                    label: 'Juli',
                  },
                  {
                    value: 'agustus',
                    label: 'Agustus',
                  },
                  {
                    value: 'september',
                    label: 'September',
                  },
                  {
                    value: 'oktober',
                    label: 'Oktober',
                  },
                  {
                    value: 'november',
                    label: 'November',
                  },
                  {
                    value: 'desember',
                    label: 'Desember',
                  },
                ]}
                />
                </div>
              </div>
            </div>

            <div>
              <Table className="px-4 py-3" columns={columns} dataSource={data} />;
            </div>
          </div>
        </div>
      </div>
  );
};

export default Lembur;