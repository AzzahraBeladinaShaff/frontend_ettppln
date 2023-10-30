import React from "react";
import { Input, Space, Form, Upload } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineAlternateEmail,
  MdOutlineBadge,
  MdApartment,
  MdOutlineMeetingRoom,
  MdDomain,
  MdOutlineBackup,
} from "react-icons/md";
import { BiGroup, BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineApartment } from "react-icons/ai";
import { InboxOutlined } from '@ant-design/icons';

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Data_Pegawai = () => {
  return (
    <div>
      <h3 className="mb-4">Data Pegawai</h3>

      <div className="d-flex gap-3">
      <div className="bg-white justify-content-between bginfopribadi">
        <div className="bg-white justify-content-between- bginfo border">
          <h5 className="informasi_pribadi">Informasi Pribadi</h5>
        </div>

        <div className="nama_lengkap">
          <p>Nama Lengkap</p>
          <div className="d-flex gap-3">
            <Input
              placeholder="Nama depan"
              prefix={<FaRegUserCircle />}
              style={{ width: 250 }}
            />
            <Input placeholder="Nama belakang" style={{ width: 250 }} />
          </div>
        </div>

        <div className="nama_lengkap">
          <p>Alamat Email</p>
          <Input
            placeholder="Alamat email"
            prefix={<MdOutlineAlternateEmail />}
            style={{ width: 515 }}
          />
        </div>

        <div className="nama_lengkap">
          <p>Username</p>
          <Space direction="vertical">
            <Input
              addonBefore="Workstation.com/"
              placeholder="Cari disini"
              style={{ width: 515 }}
            />
          </Space>
        </div>
      </div>

      <div className="bg-white justify-content-between bg_photo">
        <div className="bg-white justify-content-between- bginfo border">
          <h5 className="informasi_pribadi">Photo</h5>
        </div>

        <div className="px-5 py-4 d-flex gap-3">
          <div>
            <img src="../zahra.png" alt="Photo profil" className="photo_data" />
          </div>
          <div>
            <p className="edit_photo">Edit photo</p>
            <div className="d-flex gap-3">
              <p className="grey hapus_update">Hapus</p>
              <p className="biru hapus_update">Update</p>
            </div>
          </div>
        </div>

        
      <Form.Item className="upload_photo" name="dragger" valuePropName="fileList" getValueFromEvent={normFile} >
        <Upload.Dragger name="files" action="/upload.do">
          <p className="icon_upload">
            <MdOutlineBackup />
          </p>
          <div className="text_uploadphoto d-flex gap-1">
          <p className="biru">Click to upload</p>
          <p>or drag and drop</p>
          </div>
          <p className="ant-upload-hint">SVG, PNG, JPG or GIF</p>
          <p className="ant-upload-hint">(max. 800x400px)</p>
        </Upload.Dragger>
      </Form.Item>

      </div>
      </div>

      <div className="bg-white justify-content-between bgdatapegawai">
        <div className="bg-white justify-content-between- bginfo border">
          <h5 className="informasi_pribadi">Data Pegawai</h5>
        </div>

        <div className="nama_lengkap">
          <div className="d-flex gap-3">
            <div className="judul_data">
              <p>NIP</p>
              <Input
                placeholder="Isi disini"
                prefix={<MdOutlineBadge />}
                style={{ width: 300 }}
              />
            </div>
            <div className="judul_data">
              <p>Grade</p>
              <Input
                placeholder="Isi disini"
                prefix={<AiOutlineApartment />}
                style={{ width: 300 }}
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="judul_data">
              <p>Jabatan</p>
              <Input
                placeholder="Isi disini"
                prefix={<BiGroup />}
                style={{ width: 300 }}
              />
            </div>
            <div className="judul_data">
              <p>Divisi</p>
              <Input
                placeholder="Isi disini"
                prefix={<MdOutlineMeetingRoom />}
                style={{ width: 300 }}
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="judul_data">
              <p>Bagian</p>
              <Input
                placeholder="Isi disini"
                prefix={<BiSolidUserAccount />}
                style={{ width: 300 }}
              />
            </div>
            <div className="judul_data">
              <p>Bidang</p>
              <Input
                placeholder="Isi disini"
                prefix={<MdDomain />}
                style={{ width: 300 }}
              />
            </div>
          </div>

          <div className="judul_data">
            <p>Unit Kerja</p>
            <Input
              placeholder="Isi disini"
              prefix={<MdApartment />}
              style={{ width: 300 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data_Pegawai;
