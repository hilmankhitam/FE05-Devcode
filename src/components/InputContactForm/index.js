import { useEffect, useState } from "react";
import { addNewContact, updateContactInfo } from "../../services";
import "./style.css";

const InputContactForm = (props) => {
  const [id, setId] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const regexPhoneNumber = /^[0-9]*$/;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const { handleGetContacts, selectedContact } = props;

  const handleSubmit = async () => {
    if (!regexPhoneNumber.test(phoneNumber)) {
      console.log('Nomor telepon hanya dapat berupa angka.');
    } else if (!regexEmail.test(email)) {
      console.log('Format email tidak sesuai.');
    } else {
      if (id) {
        await updateContactInfo({
          id,
          data: {
            full_name: fullName,
            phone_number: phoneNumber,
            email,
          },
        });
      } else {
        await addNewContact({
          full_name: fullName,
          phone_number: phoneNumber,
          email,
        });
      }
    }

    handleGetContacts();
    resetInputValue();
  };

  const resetInputValue = () => {
    setId(0);
    setFullName("");
    setPhoneNumber("");
    setEmail("");
  };

  const allowSubmit = !(!fullName || !phoneNumber || !email);

  useEffect(() => {
    setId(selectedContact?.id);
    setFullName(selectedContact?.fullName ? selectedContact.fullName : "");
    setPhoneNumber(
      selectedContact?.phoneNumber ? selectedContact?.phoneNumber : ""
    );
    setEmail(selectedContact?.email ? selectedContact.email : "");
  }, [selectedContact]);

  return (
    <div className="input-contact__form-container">
      <h1 data-cy="header-title">Devcode Contact Manager</h1>
      <div className="input-contact__form">
        <label htmlFor="nama">Nama Lengkap</label>
        <div>
          <input
            data-cy="input-nama"
            type="text"
            name="nama"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <label htmlFor="telepon">No. Telepon</label>
        <div>
          <input
            data-cy="input-telepon"
            type="text"
            name="telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Masukkan Nomor Telepon"
          />
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            data-cy="input-email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email"
          />
        </div>
        <button
          disabled={!allowSubmit}
          data-cy="btn-submit"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default InputContactForm;
