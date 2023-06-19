import style from "./login-style.module.css";
import {set, useForm} from 'react-hook-form'
import {useState} from 'react'

export default function Login({User}) {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const [show, setShow] = useState(false)
    const [user, setUser] = useState('')


    const onSubmit = (data) => {
        setShow(true)
        setUser(data.name)

        User(data.name)
    };


  return (
    <div className={style.container}>
        <div className={style.form}>
            <div className={style.formGroup}>
                <label>Primeiro nome</label>
                <input 
                 type="text"
                 placeholder="  Insira seu primeiro nome"
                 {...register('name', {required: true,})}/>  
                 {errors?.name?.type === 'required' && <p className={style.errorMessage}>Nome é obrigatório.</p>}      
            </div>

            <div className={style.formGroup}>
                <label>E-mail </label>
                <input 
                 type="email"
                 placeholder="  Insira seu email"
                 {...register('email', {required: true, pattern: {value: /@/}})}/>
                 {errors?.email?.type === 'pattern' && <p className={style.errorMessage}>E-mail inválido.</p>}
                 {errors?.email?.type === 'required' && <p className={style.errorMessage}>E-mail é obrigatório.</p>}       
            </div>

            <div className={style.formGroup}>
                <label>Senha </label>
                <input 
                 type="password"
                 placeholder="  Insira sua senha"
                 {...register('password', {required: true, minLength:7})}/>
                 {errors?.password?.type === 'required' && <p className={style.errorMessage}>Senha é obrigatória.</p>}
                 {errors?.password?.type === 'minLength' && <p className={style.errorMessage}>Pelo menos 7 caracteres</p>}       
            </div>

            <button className={style.buttonSubmit} id="button" onClick={() => handleSubmit(onSubmit)()}>
                Entrar
            </button>

        </div>
    </div>
  );
}
