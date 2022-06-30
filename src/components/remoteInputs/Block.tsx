import React, {useContext, useEffect, useLayoutEffect, useState} from "react";
import {context, TypeObject} from "../../state/state";
import styled from "styled-components";
import {Input} from "../mainInput/input/Input";
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";


const FormStyled = styled.form`
  .title {
    font-size: 24px;
  }

  .block {
    max-width: 600px;
    margin: 20px 0 0 0;
  }

  .button-block {
    display: flex;
    justify-content: flex-end;
  }

  .window-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px auto;
    max-width: 600px;
    text-align: center;
  }

  .error {
    text-align: left;
    color: red;
  }
`

const ButtonStyled = styled(Button)`
  width: 150px;
  margin: 30px 0 0 0;
  place-self: end;
`


export const Block = () => {
    const data = useContext(context)

    const [success, setSuccess] = useState("")
    const [ready, setReady] = useState(data)

    useEffect(() => {
        formik.values.Locality = data.Locality || ""
        formik.errors.Locality = ""
        formik.values.street = data.street || ""
        formik.errors.street = ""
        formik.values.house = data.house || ""
        formik.errors.house = ""
        formik.values.flat = data.flat || ""
        formik.errors.flat = ""
        formik.values.building = data.building || ""
        formik.errors.building = ""
        formik.values.zipCode = data.zipCode || ""
        formik.errors.zipCode = ""
        if (data.Locality || data.house || data.street || data.street || data.zipCode || data.flat) {
            setReady(data)
        }
    }, [data])


    const formik = useFormik({
        initialValues: {
            Locality: "",
            house: "",
            flat: "",
            street: "",
            building: "",
            zipCode: "",
        },
        validate: (value) => {
            const errors = {} as TypeObject
            if (!value.Locality) {
                errors.Locality = "Введите название населенного пункта"
            }
            if (!value.flat) {
                errors.flat = "Введите номер квартиры"
            }
            if (!value.street) {
                errors.street = "Введите название улицы"
            }
            if (!value.house) {
                errors.house = "Введите номер дома"
            }
            if (!value.zipCode) {
                errors.zipCode = "Введите индекс"
            }
            if (!value.building) {
                errors.building = "Введите номер корпуса"
            }
            return errors
        },
        onSubmit: (values) => {
            if (values.Locality && values.flat && values.zipCode && values.street && values.house && values.building) {
                setSuccess("Success")
            }
        }
    });


    return <FormStyled onSubmit={formik.handleSubmit}>
        <div className={"block"}>
            <div className={"title"}>
                {!!Object.keys(ready).length && (success ? <div>{success}</div> : <div>Вы выбрали:</div>)}
            </div>
            <div className={"window-block"}>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"Locality"}
                           text={"Населенный пункт"}
                           values={formik.values.Locality}/>
                    {formik.errors.Locality && formik.touched.Locality ?
                        <div className={"error"}>{formik.errors.Locality}</div> : null}
                </div>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"house"} text={"Дом"}
                           values={formik.values.house}/>
                    {formik.errors.house && formik.touched.house ?
                        <div className={"error"}>{formik.errors.house}</div> : null}
                </div>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"flat"} text={"Квартира"}
                           values={formik.values.flat}/>
                    {formik.errors.flat && formik.touched.flat ?
                        <div className={"error"}>{formik.errors.flat}</div> : null}
                </div>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"street"} text={"Улица"}
                           values={formik.values.street}/>
                    {formik.errors.street && formik.touched.street ?
                        <div className={"error"}>{formik.errors.street}</div> : null}
                </div>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"building"}
                           text={"Корпус,строение"}
                           values={formik.values.building}/>
                    {formik.errors.building && formik.touched.building ?
                        <div className={"error"}>{formik.errors.building}</div> : null}
                </div>
                <div>
                    <Input onBlur={formik.handleBlur} onChanges={formik.handleChange} name={"zipCode"}
                           text={"Почтовый индекс"}
                           values={formik.values.zipCode}/>
                    {formik.errors.zipCode && formik.touched.zipCode ?
                        <div className={"error"}>{formik.errors.zipCode}</div> : null}
                </div>
            </div>
            <div className={"button-block"}>
                <ButtonStyled type="submit" variant="contained">Далее</ButtonStyled>
            </div>
        </div>
    </FormStyled>
}









