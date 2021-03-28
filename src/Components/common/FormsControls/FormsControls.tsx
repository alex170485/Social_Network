import React from 'react'
import styles from './FormControl.module.css'
import {Simulate} from "react-dom/test-utils";



// @ts-ignore
const FormControl = ({input,meta,child,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )

}



// @ts-ignore
export const Textarea = (props) => {
   const {input,meta,child,  ...restProps} = props
 return (
     <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
 )
}
// @ts-ignore
export const Input = (props) => {
    const {input,meta,child,  ...restProps} = props
    return (
        <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
    )
}

