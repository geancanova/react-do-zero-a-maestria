import './EditProfile.css';

import { uploads } from '../../utils/config';

// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { editProfile, profile, resetMessage } from '../../slices/userSlice';

// Components
import FormSubmit from '../../components/FormSubmit';

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, message, error, loading } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [imageProfile, setImageProfile] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  // load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFile = (e) => {
    // Image preview
    const image = e.target.files[0];
    setPreviewImage(image);

    // Update image state
    setImageProfile(image);
  };

  return (
    <div className="form-wrapper">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte um pouco mais sobre voce:
      </p>
      {(user.profileImage || previewImage) && (
        <img
          className='profile-image'
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ''}
        />
        <input
          type="email"
          placeholder="E-mail"
          disabled
          onChange={(e) => setEmail(e.target.value)}
          value={email || ''}
        />
        <label>
          <span>Imagem do Perfil:</span>
          <input 
            type="file"
            onChange={handleFile} 
          />
        </label>
        <label>
          <span>Bio:</span>
          <input
            type="text"
            placeholder="Insira sua descrição"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ''}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ''}
          />
        </label>
        <FormSubmit btnValue="Salvar alterações" />
      </form>
    </div>
  );
}

export default EditProfile
