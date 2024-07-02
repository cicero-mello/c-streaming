import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { BaseModalProps, BaseModalHandle } from "./types"
import { BorderButton } from "../../buttons"
import { useOutsideClick } from "../../../hooks"
import * as S from "./styles"

export const BaseModal = forwardRef<
    BaseModalHandle, BaseModalProps
>(({ title, texts, buttons, children, id }, ref) => {
    const modalRef = useRef(null)
    const [render, setRender] = useState(false)
    const [show, setShow] = useState(false)
    const [disabledOutsideClick, setDisabledOutsideClick] = useState(true)
    const [closeAction, setCloseAction] = useState<Function>()

    const open = (closeAction?: Function) => {
        if(closeAction) setCloseAction(closeAction)
        setRender(true)
    }

    const close = () => {
        setShow(false)
        if(closeAction) setTimeout(() => closeAction(), 200)
    }

    useOutsideClick(modalRef, close, disabledOutsideClick)

    useImperativeHandle(ref, () => ({
        open: open,
        close: close
    }))

    useEffect(() => {
        if(render) {
            setShow(true)
            setTimeout(() => setDisabledOutsideClick(false), 500)
        }
    }, [render])

    useEffect(() => {
        if(!show) setTimeout(() => {
            setRender(false)
            setDisabledOutsideClick(true)
        }, 500)
    }, [show])

    return render && (
        <S.Component $show={show} id={id}>
            <S.Modal ref={modalRef}>
                <S.CloseModal onClick={close}/>
                <S.Title> {title} </S.Title>
                {texts && texts.map((text, index) =>
                    <S.Text key={`${id}-text-${index}`}>
                        {text}
                    </S.Text>
                )}
                {children &&
                    <S.ChildrenWrapper> {children} </S.ChildrenWrapper>
                }
                <S.ButtonsWrapper>
                    {buttons && buttons.length > 0 &&
                        buttons.map((buttonProps, index) =>
                            <BorderButton
                                {...buttonProps}
                                key={`${id}-button-${index}`}
                            />
                        )
                    }
                </S.ButtonsWrapper>
            </S.Modal>
        </S.Component>
    )
})
