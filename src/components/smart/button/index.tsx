import React, { FC, useLayoutEffect, useRef } from "react"
import { ButtonProps } from "./types"
import { HiddenSpan, StyledButton, StyledLink } from "./styles"
import { createLinkPath } from "../../../paths"
import { useNavigation } from "../../../hooks"

export const Button: FC<ButtonProps> = ({
    theme, url, disabled, onClick,
    tabIndex, keepFocusPositionWhenDisabled,
    ...rest
}) => {
    const { navigate } = useNavigation()
    const hiddenSpanRef = useRef<HTMLSpanElement>(null)
    const styledLinkRef = useRef<any>(null)
    const styledButtonRef = useRef<HTMLButtonElement>(null)
    const buttonWasFocused = useRef<boolean>()

    if(url) return (
        <StyledLink
            {...rest}
            ref={styledLinkRef}
            tabIndex={disabled ? -1 : tabIndex ?? 0}
            $theme={theme}
            $disabled={disabled}
            to={createLinkPath(url.path, url.params)}
            onClick={(e) => {
                e.preventDefault()
                if(disabled) return
                if(onClick) onClick(e)
                navigate(url.path, url.params)
            }}
            onContextMenu={(e) => {
                if(disabled) e.preventDefault()
            }}
            onKeyDown={(event) => {
                if(disabled){
                    event.preventDefault()
                    return
                }
                if(event.code === "Enter" || event.code === "Space"){
                    event.preventDefault()
                    styledLinkRef.current.click()
                }
            }}
        />
    )

    useLayoutEffect(() => {
        if(!keepFocusPositionWhenDisabled) return

        const setButtonWasFocused = () => {
            buttonWasFocused.current = true
        }
        document.addEventListener("focusin", setButtonWasFocused)

        return () => {
            buttonWasFocused.current = false
            document.removeEventListener("focusin", setButtonWasFocused)
        }
    }, [keepFocusPositionWhenDisabled])

    useLayoutEffect(() => {
        if(!keepFocusPositionWhenDisabled) return

        const isToFocusHiddenSpan = (
            keepFocusPositionWhenDisabled &&
            disabled &&
            buttonWasFocused
        )
        if(isToFocusHiddenSpan) hiddenSpanRef.current?.focus()
    }, [keepFocusPositionWhenDisabled, disabled])

    return (
        <>
            <StyledButton
                ref={styledButtonRef}
                tabIndex={disabled ? -1 : tabIndex ?? 0}
                disabled={disabled}
                $disabled={disabled}
                $theme={theme}
                onClick={onClick}
                {...rest}
            />
            {keepFocusPositionWhenDisabled && disabled &&
                <HiddenSpan
                    ref={hiddenSpanRef}
                    tabIndex={-1}
                    aria-hidden="true"
                    role="none"
                />
            }
        </>
    )
}
