import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { BaseModalProps, BaseModalHandle } from "./types"
import { useForceUpdate, useOutsideClick } from "@hooks"
import { Button } from "@components"
import * as S from "./styles"

export const BaseModal = forwardRef<
    BaseModalHandle, BaseModalProps
>(({ title, texts, buttons, children, id }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null)
    const modalContentRef = useRef<HTMLDivElement>(null)
    const [render, setRender] = useState(false)
    const [disabledOutsideClick, setDisabledOutsideClick] = useState(false)
    const forceUpdate = useForceUpdate()

    const open = () => {
        setRender(true)
        setDisabledOutsideClick(true)
        setTimeout(() => {
            setDisabledOutsideClick(false)
        }, 500)
    }

    useEffect(() => {
        if(!modalRef.current) return
        modalRef.current.showModal()
        forceUpdate()
    }, [render])

    const close = () => {
        if(!modalRef.current) return
        modalRef.current.close()
        forceUpdate()
        setTimeout(() => {
            setRender(false)
        }, S.OPACITY_TRANSITION_TIME)
    }

    useOutsideClick(modalContentRef, close, disabledOutsideClick)

    useImperativeHandle(ref, () => ({
        open: open,
        close: close
    }))

    return render && (
        <S.Modal
            id={id}
            ref={modalRef}
            $open={!!modalRef?.current?.open}
            tabIndex={-1}
        >
            <S.ModalContent ref={modalContentRef}>
                {title &&
                    <S.Title tabIndex={0}>
                        {title}
                    </S.Title>
                }
                {texts &&
                    <S.TextWrapper
                        tabIndex={0}
                        aria-label={texts.reduce((previus, current) => (
                            previus + " " + current
                        ), "")}
                    >
                        {texts.map((text, index) =>
                            <S.Text
                                key={`${id}-text-${index}`}
                                aria-hidden="true"
                            >
                                {text}
                            </S.Text>
                        )}
                    </S.TextWrapper>
                }
                {children &&
                    <S.ChildrenWrapper> {children} </S.ChildrenWrapper>
                }
                <S.ButtonsWrapper>
                    {buttons && buttons.length > 0 &&
                        buttons.map((buttonProps, index) =>
                            <Button
                                {...buttonProps}
                                key={`${id}-button-${index}`}
                            />
                    )
                }
                </S.ButtonsWrapper>
                <S.CloseModal
                    onClick={close}
                    aria-label="Close modal"
                />
            </S.ModalContent>
        </S.Modal>
    )
})
