import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { BaseModalProps, BaseModalHandle } from "./types"
import { BorderButton } from "../../buttons"
import { useOutsideClick } from "../../../hooks"
import * as S from "./styles"

export const BaseModal = forwardRef<
    BaseModalHandle, BaseModalProps
>(({ title, text, buttons, children }, ref) => {
    const modalRef = useRef(null)
    const [render, setRender] = useState(false)
    const [show, setShow] = useState(false)

    useOutsideClick(modalRef, () => setShow(false))

    useImperativeHandle(ref, () => ({
        open: () => setRender(true),
        close: () => setShow(false)
    }))

    useEffect(() => {
        if(render) setShow(true)
    }, [render])

    useEffect(() => {
        if(!show) setTimeout(() => setRender(false), 500)
    }, [show])

    return render && (
        <S.Component $show={show}>
            <S.Modal ref={modalRef}>
                <S.Title> {title} </S.Title>
                <S.Text> {text} </S.Text>
                {children}
                <S.ButtonsWrapper>
                    {buttons && buttons.length > 0 &&
                        buttons.map(buttonProps =>
                            <BorderButton {...buttonProps} />
                        )
                    }
                </S.ButtonsWrapper>

            </S.Modal>
        </S.Component>
    )
})
