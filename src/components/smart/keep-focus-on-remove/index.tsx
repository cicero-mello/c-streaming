import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { KeepFocusOnRemoveProps } from "./types"
import * as S from "./styles"

/**
 * Screen readers get confused when the focused element is removed from the DOM,
 * this component solves this by managing focus in an intuitive way for
 * screen readers and users.
 *
 * - Before the children are removed, if they were focused,
 * create an hidden "span" with no "aria" content in the "same"
 * children position (DOM), transfer focus to it,
 * and finally remove the children.
 * - After the "span" loses focus due to user action,
 * the span will also be removed from the DOM.
 *
 * Important:
 * - Each child needs a exclusive id
 * - When the hidden "span" is focused
 *  you can ONLY REMOVE children/child (dont add or do mutation)
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
    children: childrenProp
}) => {
    const children = useMemo(() => (
        !childrenProp ? [] :
        Array.isArray(childrenProp) ? childrenProp : [childrenProp]
    ), [childrenProp])

    const hiddenSpanRef = useRef<HTMLSpanElement>(null)
    const [copyChildren, setCopyChildren] = useState(children)

    useEffect(() => {
        const isHiddenSpanFocused = !!hiddenSpanRef.current
        if(!isHiddenSpanFocused) setCopyChildren(children)
    }, [children])

    useEffect(() => {
        const originalChildrenRemoveSomeElement = !!hiddenSpanRef.current
        if(originalChildrenRemoveSomeElement) {
            hiddenSpanRef.current.focus()
            const removeCopyElementFromDOM = () => {
                setCopyChildren(children)
            }
            hiddenSpanRef.current.addEventListener(
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

        if(isCopyChildFocused || !!hiddenSpanRef.current) return(
            <S.HiddenSpan
                ref={hiddenSpanRef}
                aria-label=" "
                aria-hidden="true"
                tabIndex={-1}
                role="none"
                key={"hidden-span-key-" + copyChild.props.id}
            />
        )
    })
}
