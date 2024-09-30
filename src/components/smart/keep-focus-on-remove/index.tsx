import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { KeepFocusOnRemoveProps } from "./types"
import * as S from "./styles"

/**
 * Screen readers get confused when the focused element is removed from the DOM,
 * this component solves this by managing focus in an intuitive way for
 * screen readers and users.
 *
 * - Before the children are removed, if they were focused,
 * create an hidden tag with no "aria" content in the "same"
 * children position (DOM), transfer focus to it,
 * and finally remove the children.
 * - After the hidden tag loses focus due to user action,
 * the hidden tag will also be removed from the DOM.
 *
 * Important:
 * - Each child needs a exclusive id
 * - When the hidden tag is focused
 *  dont remove, add or change the children.
 *
 * @component
 *
 * @example
 * <KeepFocusOnRemove>
 *      {showComponent && <YourComponent id={componentId}/>}
 * </KeepFocusOnRemove>
 *
 * @example
 *  <KeepFocusOnRemove>
 *      {cards.map(cardProps => <Cards {...cardProps}/>)}
 * </KeepFocusOnRemove>
 */
export const KeepFocusOnRemove: FC<KeepFocusOnRemoveProps> = ({
    children: childrenProp, ariaNotification
}) => {
    const children = useMemo(() => (
        !childrenProp ? [] :
        Array.isArray(childrenProp) ? childrenProp : [childrenProp]
    ), [childrenProp])

    const hiddenTagRef = useRef<HTMLParagraphElement>(null)
    const [copyChildren, setCopyChildren] = useState(children)

    useEffect(() => {
        const isHiddenSpanFocused = !!hiddenTagRef.current
        if(!isHiddenSpanFocused) setCopyChildren(children)
    }, [children])

    useEffect(() => {
        const originalChildrenRemoveSomeElement = !!hiddenTagRef.current
        if(originalChildrenRemoveSomeElement) {
            hiddenTagRef.current.focus()
            const removeCopyElementFromDOM = () => {
                setCopyChildren(children)
            }
            hiddenTagRef.current.addEventListener(
                "focusout",
                removeCopyElementFromDOM,
                { once: true }
            )
        }
    }, [childrenProp])

    return copyChildren.map(copyChild => {
        const wasOriginalChildRemoved = !(
            children.find(child =>
                child.props.id === copyChild.props.id
            )
        )
        if(!wasOriginalChildRemoved) return copyChild

        const renderedCopyChild = document.getElementById(
            copyChild.props.id
        )
        const isCopyChildFocused = !!renderedCopyChild?.contains(
            document.activeElement
        )

        if(isCopyChildFocused || !!hiddenTagRef.current) return(
            <S.HiddenTag
                ref={hiddenTagRef}
                tabIndex={-1}
                role="presentation"
                key={"hidden-span-key-" + copyChild.props.id}
            >
                {ariaNotification ?? "Removed"}
            </S.HiddenTag>
        )
    })
}
