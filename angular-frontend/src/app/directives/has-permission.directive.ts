import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo/userinfo.service';

@Directive({
    selector: '[appHasPermissions]'
})

export class HasPermissionsDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private service: UserinfoService
    ) { }

    @Input()
    set appHasPermissions(userPermission: string[]) {
        this.showOrKeepHidden(userPermission)
    }

    showOrKeepHidden(permitted_roles: string[]) {
        this.service.getUserinfo().subscribe(userinfo => {
            if (permitted_roles.filter(value => userinfo.roles.includes(value)).length > 0) {
                this.showComponent()
            }
        })
    }

    showComponent(): void {
        this.viewContainerRef.clear()
        this.viewContainerRef.createEmbeddedView(
            this.templateRef
        ).rootNodes[0]
    }

}