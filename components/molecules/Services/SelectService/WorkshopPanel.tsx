import { useContext, useEffect } from 'react'
import { useMobile } from 'lib/utils/useMobile'
import { LayoutContext } from 'components/atoms/layout/LayoutContext';

export const WorkshopPanel = () => {
    const { isMobile } = useMobile()
    const layout = useContext(LayoutContext);

    useEffect(() => {
        layout.setHideLeftPanel(false)
        layout.setHideRightPanel(isMobile)
        // eslint-disable-next-line
    }, [isMobile])
    return <></>
}
